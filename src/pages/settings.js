import React from "react";
import styled from "styled-components";

const SettingsTabContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: calc(100vh - 70px);
  padding: 10px;
`;

const SettingsTab = () => {
  return (
    <SettingsTabContainer>
      <div className="container">
        <div className="tab-content">
          <h1>Settings</h1>
        </div>
      </div>
    </SettingsTabContainer>
  );
};

export default SettingsTab;
