import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Headlines from '../../components/Headlines';
import AddHeadline from '../../components/AddHeadline';

import axios from 'axios';

const Home: React.FC = () => {
    const initialHeadlines:any[] = []
    const [headlines, setHeadlines] = useState(initialHeadlines);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
            .then(res => {
                console.log(res);
                const loadedHeadlines = res.data.map((h:any) => ( {id: h.id, title: h.name, content: h.body, checked: false} ));
                setHeadlines(loadedHeadlines);
            });

        // Now we're going to start using Firebase...
    }, [])

    // Toggle complete
    const markRead = (id:number) => {
        const newHeadlines:any[] = headlines.map((headline:any) => {
            if(headline.id === id) {
                headline.checked = !headline.checked;
            }
            return headline;
        });
        setHeadlines(newHeadlines);
    }

    // Delete an item
    const delItem = (id:number) => {
        setHeadlines([...headlines.filter((headline:any) => headline.id !== id)] );
    }

    const addHeadline = (headline:any) => {
        const newHeadline = {
            id: headlines.length + 1,
            title: headline.title,
            content: headline.content,
            checked: false
        }
        setHeadlines([...headlines, newHeadline]);
    }

    // .bind(this) is required on this.markRead to make this available to that function
    // we could also do this by ommitting .bind(this) and use an arrow function for markRead = () =>
    return (
        <div>
            <Link to={`/login`}>Login</Link>
            <Link to={`/register`}>Register</Link>
            <h2>Headlines</h2>
            <AddHeadline addHeadline={addHeadline} />
            <Headlines headlines={headlines} markRead={markRead} delItem={delItem} />
            <p>Robbie, continue from <a href="https://www.youtube.com/watch?v=sBws8MSXN7A&t=3319">this point!</a></p>
        </div>
    );
}

export default Home;