import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary : {career.salary}</p>
      <p>Base in : {career.location}</p>
      <div className="details">
        <h3>Description</h3>
        <p>{career.description}</p>
      </div>
      <div className="details">
        <h3>Requirements</h3>
        <div>{career.requirements.map((req) => `• ${req} `)}</div>
      </div>
    </div>
  );
}

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  return res.json();
};
