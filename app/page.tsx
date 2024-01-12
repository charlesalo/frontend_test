"use client";

import React, { useEffect, useState } from 'react';
import axios from "axios";
import styles from "./page.module.css";
import Gallery from "./gallery";
import { User } from './types/user';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        console.log("Fetched users:", response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users:', error);
      });
  }, []);

  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}