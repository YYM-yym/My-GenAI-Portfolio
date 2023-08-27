// Services.js
import React from 'react';

function Services() {
  return (
    <div className="services-section">
      <div className="service-block">
        <div className="service-icon">🔧</div> {/* Placeholder icon */}
        <h2 className="service-title">Data Engineering</h2>
        <p>Building robust data pipelines and ensuring seamless data flow for optimal operations.</p>
      </div>
      <div className="service-block">
        <div className="service-icon">🤖</div> {/* Placeholder icon */}
        <h2 className="service-title">AI Development</h2>
        <p>Developing state-of-the-art AI models to solve complex challenges and bring innovation.</p>
      </div>
      <div className="service-block">
        <div className="service-icon">📊</div> {/* Placeholder icon */}
        <h2 className="service-title">Data Analysis</h2>
        <p>Analyzing data patterns to derive meaningful insights and facilitate data-driven decisions.</p>
      </div>
    </div>
  );
}

export default Services;
