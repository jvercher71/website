import React from 'react';
import './ComparisonTable.css';

const ComparisonTable = () => {
  const data = [
    {
      label: 'Initial License',
      shepherds: '$600',
      cloud: '$0 - $200+',
      highlight: false
    },
    {
      label: 'Monthly Fee',
      shepherds: '$0',
      cloud: '$72 - $250+',
      highlight: true
    },
    {
      label: '5-Year Total Cost',
      shepherds: '$600',
      cloud: '$4,320 - $15,000+',
      highlight: true
    },
    {
      label: 'Data Location',
      shepherds: 'Local (On-Site)',
      cloud: 'Remote Cloud',
      highlight: false
    },
    {
      label: 'Data Ownership',
      shepherds: '100% Private',
      cloud: 'Vendor-Managed',
      highlight: false
    },
    {
      label: 'Growth Penalties',
      shepherds: 'None',
      cloud: 'Higher Fees for More Members',
      highlight: true
    }
  ];

  return (
    <div className="comparison-container glass">
      <div className="comparison-header">
        <h3 className="gradient-text">True Stewardship: The Cost of Ownership</h3>
        <p>A mathematical look at long-term ministry investment.</p>
      </div>
      <div className="table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th className="highlight-column">ShepherdsCore</th>
              <th>Standard Cloud ChMS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={row.highlight ? 'row-highlight' : ''}>
                <td className="row-label">{row.label}</td>
                <td className="shepherds-value">{row.shepherds}</td>
                <td className="cloud-value">{row.cloud}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="comparison-footer">
        <p>*Based on 2026 industry averages for mid-sized congregations.</p>
      </div>
    </div>
  );
};

export default ComparisonTable;
