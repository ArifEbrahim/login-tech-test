import React, { useState, useEffect } from "react";
import PolicySection from "./PolicySection";
import axios from "axios";
import TextFormatter from "./textFormatter";
import "./Policy.css";
import { useHistory } from "react-router-dom";

export default function Policy() {
  const [policy, setPolicy] = useState("");
  const [proposer, setProposer] = useState("");
  const [address, setAddress] = useState("");
  const [vehicle, setVehicle] = useState("");
  let history = useHistory();
  const tf = new TextFormatter();
  const url = "https://api.bybits.co.uk/policys/details";

  useEffect(
    () => {
      getPolicyDetails();
    }, // eslint-disable-next-line
    []
  );

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
      setProposer(tf.formatName(response.data.proposer));
      setAddress(tf.formatAddress(response.data.policy.address));
      setVehicle(tf.formatVehicle(response.data.vehicle));
      setPolicy(response.data.policy);
    } catch (error) {}
  };

  const signOut = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="policy-container">
      <header className="policy-header">
        <h2>My Policy</h2>
      </header>
      <section className="policy-section">
        <div className="policy-box-1">
          <div className="policy-box-2">
            <h3>Policy details</h3>
            <PolicySection
              label={"Policy reference:"}
              text={policy ? tf.formatPolicyRef(policy) : ""}
            />
            <PolicySection label={"Cover type:"} text={policy.cover} />
          </div>
          <div className="vehicle-box">
            <h3>Vehicle details</h3>
            <PolicySection label={"Car:"} text={vehicle} />
          </div>
          <div className="proposer-box">
            <h3>Proposer details</h3>
            <PolicySection label={"Name:"} text={proposer} />
            <PolicySection label={"Address:"} text={address} />
          </div>
          <div className="btn-box">
            <button className="btn-light" onClick={signOut}>
              <span className="btn-text-dark">Sign out</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
