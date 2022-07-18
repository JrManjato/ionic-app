import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import axios from "axios";
import {
  IonTabBar,
  IonTabButton
} from '@ionic/react';
import React, { useState, useEffect } from "react";
import { IJob } from "./IJob";
import './Tab2.css';
import { log } from 'console';

const Tab2: React.FC = () => {
  const [result, setResult] = useState<IJob[]>([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    const promise = axios.get("https://yawb-pj.herokuapp.com/" + page);  //   https://jsonplaceholder.typicode.com/posts
    promise.then((response) => {
      setResult(response.data)
      //console.log(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  result.map((job) => {
    console.log(job.title);
  })
  return (
    <div className="App back-img">
      {result.map((job) => {
        return (
          <div className="card_item">
            <div className="job_item">
              <h3 className="title">{job.title}</h3>
              <h3 className="company">{job.id}<span className="contrat">{job.id}</span></h3>

              <h3 className="date_lim">{job.title}</h3>
            </div>
          </div>
        )
      })}
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
        </IonTabButton>
      </IonTabBar>
    </div>
  );
};

export default Tab2;
