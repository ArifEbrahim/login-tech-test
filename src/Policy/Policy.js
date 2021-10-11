import React, { useState, useEffect } from "react";
import PolicySection from "./PolicySection";
import axios from "axios";

export default function Policy() {
  const [proposer, setProposer] = useState("");
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
      setProposer(`${response.data.proposer.first_names} ${response.data.proposer.last_names}`)
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
