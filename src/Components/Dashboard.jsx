import React from "react";
import '../css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Welcome to the Dashboard!</h1>
        </header>
        <div className="dashboard-sidebar">
          <section className="dashboard-about">
            <h2> About</h2>
            <p>
              This is a dashboard for the library management system. You can
              manage books, students, and more from here.
            </p>
          </section>

        </div>
        <div className="dashboard-content">
          <section className="dashboard-content">
            <main className="dashboard-main">
              <p>This is where you can add more content relevant to your dashboard, such as statistics, recent activity, or featured items.</p>
              <div className="dashboard-stats">
                <h3>Statistics</h3>
                <ul itemType="none">
                  <li>Number of Books: 100</li>
                  <li>Number of Students: 500</li>
                  <li>Number of Borrowed Books: 50</li>
                </ul>
              </div>
              <div className="dashboard-recent-activity">
                <h3>Recent Activity</h3>
                <ul>
                  <li>John Doe borrowed "To Kill a Mockingbird" on 02/03/2024</li>
                  <li>Jane Smith returned "1984" on 02/02/2024</li>
                </ul>
              </div>
              <div className="dashboard-featured">
                <h3>Featured Books</h3>
                <ul>
                  <li>"The Great Gatsby"</li>
                  <li>"Pride and Prejudice"</li>
                  <li>"Harry Potter and the Philosopher's Stone"</li>
                </ul>
              </div>
            </main>
          </section>
          <section className="dashboard-content">
            <main className="dashboard-main">
              <div className="dashboard-images">
                <img src="/Images/image1.jpg" alt="Book Image" />
                <img src="/Images/image2.jpg" alt="Bookshelf1" />
                <img src="/Images/Image3.jpg" alt="Bookshelf2" />
                <img src="/Images/Image4.jpg" alt="Bookshelf3" />
                <img src="/Images/Image5.jpg" alt="Bookshelf4" />
                <img src="/Images/Image6.jpg" alt="Bookshelf5" />
                <img src="/Images/Image7.jpg" alt="Bookshelf6" />
                <img src="/Images/Image8.jpg" alt="Bookshelf7" />
              </div>
            </main>
          </section>
        </div>
        <footer className="dashboard-footer">
          <p>&copy; {new Date().getFullYear()} Library Management System. All rights reserved. Created By Jitendra Sharma</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
