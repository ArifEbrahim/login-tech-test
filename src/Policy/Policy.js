import React, { useState, useEffect } from "react";
import PolicySection from "./PolicySection";
import axios from "axios";
import TextFormatter from "./textFormatter";

export default function Policy() {
  const [proposer, setProposer] = useState("");
  const tf = new TextFormatter();
  const url = "https://api.bybits.co.uk/policys/details";

  useEffect(() => {
    getPolicyDetails();
  }, []);

  const getPolicyDetails = async () => {
    const config = {
      headers: {
        environment: "mock",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.get(url, config);
      setProposer(tf.formatName(response.data.proposer))
    } catch(error) {}

  };

  return (
    <>
      <h2>My Policy</h2>
      <PolicySection label={"Policy reference:"} text={""} />
      <PolicySection label={"Cover type:"} text={""} />
      <PolicySection label={"Car:"} text={""} />
      <PolicySection label={"Name:"} text={proposer} />
      <PolicySection label={"Address:"} text={""} />
      <button>Sign out</button>
    </>
  );
}
