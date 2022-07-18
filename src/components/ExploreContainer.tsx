import './ExploreContainer.css';
import axios from "axios";
import { IJob } from "./IJob";
import React, { useState, useEffect } from "react";
import JsonData from "./jspn2.json";
import { Pagination } from './pagination';
import {
  IonTabBar,
  IonTabButton,
  useIonAlert
} from '@ionic/react';
const ExploreContainer: React.FC<any> = () => {
  const [result, setResult] = useState<IJob[]>([]);
  const [page, setPage] = useState(1);
  const [text, setText] = useState(80);
  const [doted, setDoted] = useState("...");
  const jobPerPage = 5;
  const pagesVisited = page * jobPerPage;
  const [noConnection] = useIonAlert();
  function toggle(): void {
    text === 80 ? setText(1000) : setText(80);
  }
  function dote() {
    doted === "..." ? setDoted("") : setDoted("...");
  }
  function Increment() {
    setPage(page + 1);
    console.log("incremented")
  }
  function Decrement() {
    if (page >= 2) {
      setPage(page + 1);
      console.log("Decremented")
    }
  }
  useEffect(() => {
    const promise = axios.get("https://yawb-pj.herokuapp.com/" + page);  //   https://jsonplaceholder.typicode.com/posts
    promise.then((response) => {
      setResult(response.data)
      //console.log(response.data);
    }).catch((err) => {
      noConnection({
        header: "Alert",
        message: "Please check your connection",
        buttons: ["OK"]
      })
      console.log(err);
    })
  }, [page])
  result.map((job) => {
    console.log(job); // id post society contract description link
  })
  return (
    <div className="App back-img">
      {result.slice(1, 1000000).map((job) => {
        return (
          <div className="card_item" onClick={toggle}>
            <div className="logo">{job.society.slice(0, 1)}</div>
            <div className="job_item">
              <h3 className="title">{job.post}</h3>
              <h3 className="company">{job.society}<span className="contrat">{job.contract}</span></h3>
              <h3 className="description" onClick={dote}>{job.description.slice(0, text)}{doted}</h3>
              <form action={job.link}>
                <input type="submit" value="Plus d'info..." />
              </form>
            </div>
          </div>
        )
      })}
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <div className='buttons'>
          <button onClick={Decrement} className='decrement'>Page précedente</button>
          <button onClick={Increment} className="increment">Page suivante</button>
          </div>
        </IonTabButton>
      </IonTabBar>
    </div>
  );
}

export default ExploreContainer;

/*
 {result.slice(pagesVisited === 1 ? 0 : pagesVisited, pagesVisited + jobPerPage).map((job) => {
        return (
          <div className="card_item" onClick={toggle}>
            <div className="logo">{job.socie.slice(0, 1)}</div>
            <div className="job_item">
              <h3 className="title">{job.title}</h3>
              <h3 className="company">{job.id}<span className="contrat">{job.contract}</span></h3>
              <h3></h3>
              <h3 className="description" onClick={dote}>{job.description.slice(0,text)}{doted}</h3>
              <form action={job.href}>
                <input type="submit" value="Plus d'info..." />
              </form>
              <h3 className="date_lim">{job.limit_date}</h3>
            </div>
          </div>
        )
      })}
      import './ExploreContainer.css';

import axios from "axios";
import { IJob } from "./IJob";
import React, { useState, useEffect } from "react";
import JsonData from "./jspn2.json";
import { Pagination } from './pagination';
import {
  IonTabBar,
  IonTabButton,
  useIonAlert
} from '@ionic/react';
const ExploreContainer: React.FC<any> = () => {
  const [result, setResult] = useState<IJob[]>([]);
  const [page, setPage] = useState(1);
  const totalPages = 150;
  const handlePages = (updatePage: number) => setPage(updatePage);

  const [jobs] = useState(JsonData.slice(0, 100));
  const [text, setText] = useState(80);
  const [doted, setDoted] = useState("...");
  const jobPerPage = 5;
  const pagesVisited = page * jobPerPage;
  const [noConnection] = useIonAlert();
  function toggle():void{
    text===80? setText(1000): setText(80);
    }
  function dote() {
    doted==="..."? setDoted(""): setDoted("...");
  }
  useEffect(() => {
    const promise = axios.get("https://yawb-pj.herokuapp.com/"+page);  //   https://jsonplaceholder.typicode.com/posts
    promise.then((response) => {
      setResult(response.data)
      //console.log(response.data);
    }).catch((err) => {
      noConnection({
        header: "Alert",
        message: "Please check your connection",
        buttons: ["OK"]
      })
      console.log(err);
    })
  }, [])
  result.map((job) => {
    console.log(job); // id post society contract description link
  })
  return (
    <div className="App back-img">
     {result.slice(1,1000000).map((job)=>{
      return(
        <div className="card_item" onClick={toggle}>
            <div className="logo">{job.society.slice(0,1)}</div>
            <div className="job_item">
              <h3 className="title">{job.post}</h3>
              <h3 className="company">{job.society}<span className="contrat">{job.contract}</span></h3>
              <h3 className="description" onClick={dote}>{job.description.slice(0,text)}{doted}</h3>
              <form action={job.link}>
                <input type="submit" value="Plus d'info..." />
              </form>
            </div>
          </div>
      )
     })}
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <Pagination
            page={page}
            totalPages={totalPages}
            handlePagination={handlePages}
           
          />
        </IonTabButton>
      </IonTabBar>
    </div>
  );
}
*/