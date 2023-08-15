import { useState } from "react";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import InfoCard from "../components/InfoCard";

const Dashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [value, setValue] = useState(30);
  const [quality, setQuality] = useState("Normal");

  const handleSelect = (event) => {
    setQuality(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <h2 style={{ color: "grey", paddingLeft: '20%' }}>Welcome User!</h2>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '4% 0'}}>
      <InfoCard
        title="Online Mode"
        body="Is your application connected to the internet?"
      >
        <Switch
          color="secondary"
          onChange={() => setIsOnline(!isOnline)}
          label="Online Mode"
          defaultChecked
        />
      </InfoCard>
      <InfoCard
        title="Master Volume"
        body="Overrides all other sound settings in this application"
      >
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </InfoCard>
      <InfoCard
        title="Sound Quality"
        body="Manually control the music quality in the event of poor connection"
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="quality"
          onChange={handleSelect}
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Normal">Normal</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </InfoCard>
    </div>
    <div style={{paddingLeft: '20%'}}>
      <h3>System Notifications</h3>
      {isOnline && (
        <p>
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </p>
      )}
      {value > 80 && (
        <p>
          Listening to music at a high volume could cause long-term hearing
          loss.
        </p>
      )}
      {quality === "Low" && (
        <p>
          Music quality is degraded. Increase quality if your connection allows
          it.
        </p>
      )}
      </div>
    </>
  );
};

export default Dashboard;
