import React ,  { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './newslist.css';

import { CSSTransition , TransitionGroup } from 'react-transition-group';

import Button from '../buttons/button'
import CardInfo from '../cardInfo/cardinfo';

class NewsList extends Component {

    state = {
             newslist : [],
             teams : [],
             start : this.props.start,
             end : this.props.start + this.props.anmount,
             amount : this.props.anmount ,
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
        axios.get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState({
                newslist : [...this.state.newslist , ...response.data]
            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end , end)
    }
    renderNews = () => {
        let template = null;
        switch(this.props.type) {
            case ("card") :
                template = this.state.newslist.map((item,i) => (
                    <CSSTransition
                        classNames={{
                            enter:styles.newsList_wrapper,
                            enterActive:styles.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div style = {{
                            marginTop : "0px"
                        }}>
                            <div className={styles.newslist_items}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo teams = {this.state.teams} team = {item.team} date = {item.date}/>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ))
                break ;
            default :
                template = null

        }

        return template;
    }


    render() {
        console.log("Teams Names ar ======",this.state.teams)
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    { this.renderNews( this.props.type )}
                </TransitionGroup>
                <Button
                  type = "loadmore"
                  loadMore = {() => this.loadMore()}
                  cta = "Load More News" 
                />
             </div>
        )
    }
}
export default NewsList;