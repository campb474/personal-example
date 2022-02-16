import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import {Post} from "../component/post";

const anotherGetPost = async () => {
  const response = await fetch("https://api.reddit.com");
  return response.json();
}

const getPosts = () => {
  return new Promise(resolve => {
    fetch(
      "https://api.reddit.com",
    ).then(res => res.json).then(res => resolve(res));
    resolve(0);
  })
}

const Home: NextPage = () => {
  const [post, setPost] = useState([]);
  console.log(post);
  useEffect(() => {
    getPosts().then(res => {
      console.log(res);
    });
  }, [])
  getPosts().then();
  return (
    <>
    {
      post.map((item: any) => {
        return(
          <Post
          key ={item.data.id}
          item = {item}/>
        )
      })
    }
    </>
  )
}

export default Home
