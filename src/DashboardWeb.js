// DashboardWeb.js

import React, { useState ,useEffect} from 'react';
import './DashboardWeb.css';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Insights');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const renderContent = () => {
    switch (selectedTab) {
      case 'Insights':
        return (
          <div className="insightsContent">
            <div className="card">
              <h2>Breaking News of Company</h2>
              <p>Placeholder content for breaking news.Placeholder content for breaking news.Placeholder content for breaking news.Placeholder content for breaking news.Placeholder content for breaking news.Placeholder content for breaking news.Placeholder content for breaking news...</p>
            </div>
            <div className="card">
              <h2>Recent Blog from Person</h2>
              <p>Placeholder content for recent blog...</p>
            </div>
            <div className="card">
              <h2>Competitors</h2>
              <p>Placeholder content for competitors...</p>
            </div>
            <div className="card">
              <h2>Geography</h2>
              <p>Placeholder content for geography...</p>
            </div>
            <div className="card">
              <h2>Culture</h2>
              <p>Placeholder content for culture...</p>
            </div>
            <div className="card">
              <h2>Strategic Focus</h2>
              <p>Placeholder content for strategic focus...</p>
            </div>
            <div className="card">
              <h2>Stakeholders</h2>
              <p>Placeholder content for stakeholders...</p>
            </div>
            <div className="card">
              <h2>Icebreakers</h2>
              <p>Placeholder content for icebreakers...</p>
            </div>
            <div className="card">
              <h2>Discovery Question</h2>
              <p>Placeholder content for discovery question...</p>
            </div>
            <div className="card">
              <h2>Sales Strategy</h2>
              <p>Placeholder content for sales strategy...</p>
            </div>

            {/* Add other cards with single lines */}
          </div>
        );
      case 'Person':
        return (
          <div className="insightsContent">
           <div className="card">
              <h2>About</h2>
              <p>Placeholder content for about...</p>
            </div>
            <div className="card">
              <h2>Skiils</h2>
              <p>Placeholder content for skills...</p>
            </div>
            <div className="card">
              <h2>Hobbies</h2>
              <p>Placeholder content for hobbies...</p>
            </div>
            <div className="card">
              <h2>Awards</h2>
              <p>Placeholder content for awards...</p>
            </div>
            <div className="card">
              <h2>LinkedIn and Github</h2>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="calendarIcon"
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="calendarIcon"
                src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
                alt="GitHub"
              />
            </a>
            
            </div>
            <div className="card">
              <h2>Social Media Handles</h2>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="calendarIcon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="calendarIcon"
                    src="https://i.pinimg.com/736x/2b/a7/17/2ba717ac010d3b9f8d26e9db4da291b8.jpg"
                    alt="X"
                  />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="calendarIcon"
                    src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png"
                    alt="Instagram"
                  />
                </a>
            </div>
          </div>
        );
      case 'Company':
        return (
          <div className="insightsContent">
              <div className="card">
              <h2>About</h2>
              <p>Placeholder content for breaking about...</p>
            </div>
            <div className="card">
              <h2>Specializations and Industries</h2>
              <p>Placeholder content for Specializations...</p>
            </div>
            <div className="card">
              <h2>Current Technologies</h2>
              <p>Placeholder content for technologies...</p>
            </div>
            <div className="card">
              <h2>Employees Info</h2>
              <p>Placeholder content for info...</p>
            </div>
            <div className="card">
              <h2>Social Media Handles</h2>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="calendarIcon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="calendarIcon"
                    src="https://i.pinimg.com/736x/2b/a7/17/2ba717ac010d3b9f8d26e9db4da291b8.jpg"
                    alt="X"
                  />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="calendarIcon"
                    src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png"
                    alt="Instagram"
                  />
                </a>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
  <div className='full'> 
    <div className="dashboardContainer">
      <div className="topBar">
        <div className="companyName">Stealth</div>
        
        <div className="sideMenu">
          <div>
          <img
            className="menubarimage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png"
            alt="Menu Icon"
          />
          <button>Home</button></div>
          <button>My Profile</button>
          <button>Account Details</button>
          <button>Help</button>
          <button>Send Feedback</button>
          <button>Logout</button>
        </div>
        <div className="menuIcon">
          
          <img
            className="menuIconImage"
            src="https://cdn-icons-png.flaticon.com/512/4663/4663114.png"
            alt="Menu Icon"
          />
        </div>
      </div>
      <div className="digitalWatch">
          <p>{currentTime.toLocaleTimeString()}</p>
          <p>{currentTime.toLocaleDateString()}</p>
        </div>

      <div className="header">
        <h1>
          <img
            className="calendarIcon"
            src="https://static.vecteezy.com/system/resources/previews/005/988/959/original/calendar-icon-free-vector.jpg"
            alt="Calendar Icon"
          />
          You have a meeting with John Doe in 5 minutes
        </h1>
        <img
          className="profileImage"
          src="https://media.licdn.com/dms/image/C5103AQFl656k2-DwOg/profile-displayphoto-shrink_800_800/0/1517034957463?e=2147483647&v=beta&t=0SFHyDkPN7RGKIO0VEy33a6KrtluAN3aAvxkL2dbHSM"
          alt="John Doe"
        />
      </div>
      <div className="tabs">
        {['Insights', 'Person', 'Company'].map((tab) => (
          <button
            key={tab}
            className={`tab ${selectedTab === tab ? 'selectedTab' : ''}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderContent()}
      <div className="floatingButton">
        {/* Add floating button for "View Events" here */}
        <button className='one'>View Events</button>
      </div>
      </div>
      <div className="companyDetails">
          <p className='aboutcompany'>
            About the company
          </p>
          <p className='description'> Welcome to My Stealth! We are a cutting-edge company committed to delivering innovative solutions.</p>
          <button className="sendFeedbackButton">Send Feedback</button>
          <div className="socialMediaHandles">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="socialMediaIcon"
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="socialMediaIcon"
                src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
                alt="GitHub"
              />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="socialMediaIcon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="socialMediaIcon"
                    src="https://i.pinimg.com/736x/2b/a7/17/2ba717ac010d3b9f8d26e9db4da291b8.jpg"
                    alt="X"
                  />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="socialMediaIcon"
                    src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png"
                    alt="Instagram"
                  />
                </a>
            
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
