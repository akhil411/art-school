import React, { Component } from "react";
import "./style.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Like from './Like/Like';
import API from './../../../utils/API';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			comment: '',
			commentPostId: '',
			postState: '',
			showcomment: [],
			posts: [],
			skip: 0,
			morePosts: true,
			offset: 4,
			text: "",
			selectedFile: "",
			errors: {},
			submitSuccess: false,
		}
		this.loadPosts = this.loadPosts.bind(this);
	}

	componentDidMount() {
		this.loadPosts(this.state.skip);
	}

	onTextChange = e => {
		this.setState({ text: e.target.value });
	}

	onFileChange = e => {
		this.setState({ selectedFile: e.target.files[0] });
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.selectedFile) {
			this.singleFileUploadHandler();
		} else {
			this.createPost();
		}
	};

	createPost = (imageDetails = null) => {
		const imageName = imageDetails ? imageDetails.image : null;
		const imageUrl = imageDetails ? imageDetails.location : null;
		API.createPosts({ text: this.state.text, user: this.props.userId, name: imageName, url: imageUrl })
			.then(res => {
				this.setState({ text: "", errors: "", submitSuccess: true, skip: 0, posts: [] }, () => {
					this.loadPosts(this.state.skip);
				});

			})
			.catch(err => {
				this.setState({ errors: err.response.data })
			});
	}

	singleFileUploadHandler = () => {
		console.log(this.state.selectedFile)
		console.log(this.state.selectedFile.name)
		const data = new FormData();
		// If file selected
		if (this.state.selectedFile) {
			data.append('image', this.state.selectedFile, this.state.selectedFile.name);
			API.fileUpload(data, {
				headers: {
					'accept': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
				}
			})
				.then((response) => {
					if (200 === response.status) {
						// If file size is larger than expected.
						if (response.data.error) {
							if ('LIMIT_FILE_SIZE' === response.data.error.code) {
								// this.ocShowAlert( 'Max size: 2MB', 'red' );
							} else {
								console.log(response.data);
								// If not the given file type
								// this.ocShowAlert( response.data.error, 'red' );
							}
						} else {
							// Success
							let imageDetails = response.data;
							console.log('fileName', imageDetails);
							this.createPost(imageDetails);
							//  this.ocShowAlert( 'Filefi Uploaded', '#3089cf' );
						}
					}
				}).catch((error) => {
					// If another error
					// this.ocShowAlert( error, 'red' );
				});
		} else {
			// if file not selected throw error
			//  this.ocShowAlert( 'Please upload file', 'red' );
		}
	};

	loadPosts = (skip) => {
		API.getPosts(skip)
			.then(res => {
				if (res.data.length !== 0) {
					this.setState({ ...this.state, posts: [...this.state.posts, ...res.data] })
				} else {
					this.setState({ morePosts: false })
				}
			})
			.catch(err => console.log(err));
	};

	inputCommentChange = (event) => {
		this.setState({ comment: event.target.value })
	}

	loadComments = (postId) => {
		API.loadComments(postId)
			.then(res => {
				console.log(res)
				this.setState({ showcomment: res.data.comments.comment });
				var commentModal = document.getElementsByClassName("modal-comment-body")[0];
				commentModal.innerHTML = "";
				this.state.showcomment.map(comment => (
					commentModal.innerHTML += "<p><strong>" + comment.user.name + "</strong>: " + comment.text + "</p>"
				))
			})
			.catch(err => console.log(err));
	}

	submitComment = (e) => {
		e.preventDefault();
		API.setComment({ user: this.props.userId, postId: this.state.commentPostId, comment: this.state.comment })
			.then(res => {
				this.setState({ comment: "" })
				this.loadComments(this.state.commentPostId);
			})
			.catch(err => console.log(err));
	}

	clickComment = (postId) => {
		this.setState({ commentPostId: postId })
		this.loadComments(postId)
	}

	fetchMoreData = () => {
		this.setState({ skip: this.state.skip + this.state.offset }, () => {
			setTimeout(() => {
				this.loadPosts(this.state.skip)
			}, 1500);
		})
	}

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		this.setState({ submitSuccess: false })
	};

	render() {

		const { errors } = this.state;

		return (
			<div>
				<div className="modal fade" id="likeModalCenter" role="dialog" aria-labelledby="likeModalCenterTitle" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content modal-likes-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body modal-likes-body">
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="commentModalCenter" tabindex="-1" role="dialog" aria-labelledby="commentModalCenterTitle" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body modal-comment-body">
							</div>
							<div className="comment-input-box">
								<form onSubmit={this.submitComment}>
									<input placeholder="Add Comment" type="text" value={this.state.comment} onChange={this.inputCommentChange}></input>
									<button>Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="blog-submit">
					<div className="card">
						<div className="card-body">
							<form onSubmit={this.onSubmit}>
								<textarea value={this.state.text} onChange={this.onTextChange} className="form-control" rows="4" id="comment" placeholder="Add your new Art!"></textarea>
								<span className="red-text">
									{errors.text}
								</span>
								<hr></hr>
								<input onChange={this.onFileChange} type="file" name="pic" accept="image/*"></input>
								<button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
							</form>
						</div>
					</div>
				</div>
				<Snackbar
					open={this.state.submitSuccess}
					autoHideDuration={3000}
					onClose={this.handleClose}
					message="&#10004; Post Submitted Successfully"
				/>
				<InfiniteScroll
					dataLength={this.state.posts.length}
					next={this.fetchMoreData}
					hasMore={this.state.morePosts}
					loader={<h4 style={{ textAlign: 'center', marginTop: '10px' }}><CircularProgress />
					</h4>}
					endMessage={
						<p style={{ textAlign: 'center', marginTop: '10px' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					{this.state.posts.map(post => (
						<Card >
							<CardHeader
								avatar={
									<Avatar aria-label="recipe" className="avatar">{post.user.name.charAt(0).toUpperCase()}</Avatar>
								}
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								title={post.user.name}
								subheader={post.created}
							/>
							{post.upload ? (
								<CardMedia
									className="media"
									image={post.upload.url}
									title="Paella dish"
								/>
							) : (
									<div></div>
								)}
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									{post.text}
								</Typography>
							</CardContent>
							<CardActions disableSpacing>
								<Like userId={this.props.userId} likes={post.likes} postId={post._id} />
								<div onClick={() => this.clickComment(post._id)}>
									<h6 className="comment-text" data-toggle="modal" data-target="#commentModalCenter">Comment</h6>
								</div>
							</CardActions>
						</Card>
					))}
				</InfiniteScroll>
			</div>
		)
	}
}

export default Posts;
