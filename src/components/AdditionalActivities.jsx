import React from 'react';
import './AdditionalActivities.css';

const AdditionalActivities = () => {
  const activities = [
    {
      title: 'Published Article',
      description: '"INTO THE DRIVERLESS FUTURE: THE RISE OF AUTONOMOUS VEHICLES" in National level conference on Artificial intelligence and machine learning',
      details: 'Date: 23-02-2024, ISBN: 978-81-973118-2, Page number: 130-134'
    }
  ];

  return (
    <section id="activities" className="additional-activities">
      <div className="container">
        <h2>Additional Activities</h2>
        <div className="activities-list">
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <p><strong>{activity.details}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalActivities;
