import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

/*
import './ExploreContainer.css';
import axios from "axios";
import { IJob } from "./IJob";
import React, { useState } from "react";
import JsonData from "./jspn2.json";
import { Pagination } from './pagination';
import {
  IonTabBar,
  IonTabButton
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

  function toggle():void{
    text===80? setText(1000): setText(80);
    }
  function dote() {
    doted==="..."? setDoted(""): setDoted("...");
  }
  return (
    <div className="App back-img">
      {jobs.slice(pagesVisited === 1 ? 0 : pagesVisited, pagesVisited + jobPerPage).map((job) => {
        return (
          <div className="card_item" onClick={toggle}>
            <div className="logo">{job.company.slice(0, 1)}</div>
            <div className="job_item">
              <h3 className="title">{job.title}</h3>
              <h3 className="company">{job.company}<span className="contrat">{job.contract}</span></h3>
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

export default ExploreContainer;

*/