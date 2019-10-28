import React  , { Component } from 'react';
import axios from 'axios';
import Butten from '../buttons/button';
import styles from './videos.css';

class VideosList extends Component {
    state = {
        teams : [],
        videos : [],
        start : this.props.start,
        anmount : this.props.anmount,
        end : this.props.start + this.props.anmount
    }

    componentWillMount() {
        this.request(this.state.start , this.state.end)

    }
    
    request = (start , end) => {

        if (this.state.teams.length < 1) {
            axios.get(`http://localhost:3004/teams`)
            .then (response => {
                this.setState({
                    teams : response.data
                }) 
            })
        }
        axios.get(`http://localhost:3004/videos?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState({
                videos : [...this.state.videos , ...response.data]
            })
        })
    }
    renderBtn = () => {
        return this.props.loadmore? <h3>Load More Videos</h3>
        : <Butten type = 'linkTo' cta = 'More videos' linkTo = '/videos' />
    }
    renderTitle = () => {
        return this.props.title?<h3><strong>NBA</strong> Videos</h3> 
        :null

    }
    render() {
        console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",this.state.videos);
        return (
            <div>
                <div className = {styles.VideosList}>
                    {this.renderTitle()}
                </div>
                <div>
                    { this.renderBtn() }
                </div>
            </div>
        )
    }
}

export default VideosList;

