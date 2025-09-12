import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationEditor from '../../components/Admin/NavigationEditor/NavigationEditor';
import StatisticsEditor from '../../components/Admin/StatisticsEditor/StatisticsEditor';
import styles from './AdminDashboard.module.css';

// Lazy load the placeholder components
const TestimonialsEditor = lazy(() => import('../../components/Admin/TestimonialsEditor'));
const CategoryCardsEditor = lazy(() => import('../../components/Admin/CategoryCardsEditor'));
const ContactEditor = lazy(() => import('../../components/Admin/ContactEditor'));
const ContentEditor = lazy(() => import('../../components/Admin/ContentEditor'));

type ActiveSection = 'overview' | 'navigation' | 'statistics' | 'testimonials' | 'categories' | 'contact' | 'content';

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const handlePreview = () => {
    window.open('/', '_blank');
  };

  const menuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: '📊' },
    { id: 'navigation', label: 'Navigation Menu', icon: '🧭' },
    { id: 'statistics', label: 'Statistics', icon: '📈' },
    { id: 'testimonials', label: 'Testimonials', icon: '💬' },
    { id: 'categories', label: 'Category Cards', icon: '🎯' },
    { id: 'contact', label: 'Contact Info', icon: '📞' },
    { id: 'content', label: 'Page Content', icon: '📝' },
  ];

  const renderActiveSection = () => {
    const ComponentWrapper = ({ children }: { children: React.ReactNode }) => (
      <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>}>
        {children}
      </Suspense>
    );

    switch (activeSection) {
      case 'navigation':
        return <NavigationEditor />;
      case 'statistics':
        return <StatisticsEditor />;
      case 'testimonials':
        return <ComponentWrapper><TestimonialsEditor /></ComponentWrapper>;
      case 'categories':
        return <ComponentWrapper><CategoryCardsEditor /></ComponentWrapper>;
      case 'contact':
        return <ComponentWrapper><ContactEditor /></ComponentWrapper>;
      case 'content':
        return <ComponentWrapper><ContentEditor /></ComponentWrapper>;
      default:
        return (
          <div className={styles.overview}>
            <h2>Welcome to NIS Admin Dashboard</h2>
            <p>Select a section from the sidebar to manage your website content.</p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>🧭</div>
                <div className={styles.statInfo}>
                  <h3>Navigation</h3>
                  <p>Manage menu items and links</p>
                </div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statIcon}>📈</div>
                <div className={styles.statInfo}>
                  <h3>Statistics</h3>
                  <p>Update school statistics</p>
                </div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statIcon}>💬</div>
                <div className={styles.statInfo}>
                  <h3>Testimonials</h3>
                  <p>Manage reviews and testimonials</p>
                </div>
              </div>
              
              <div className={styles.statCard}>
                <div className={styles.statIcon}>🎯</div>
                <div className={styles.statInfo}>
                  <h3>Categories</h3>
                  <p>Edit category cards and content</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logoSection}>
            <img src="/images/logo.png" alt="NIS Logo" className={styles.logo} />
            <h1 className={styles.dashboardTitle}>NIS Admin</h1>
          </div>
          <button 
            className={styles.toggleButton}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <nav className={styles.sidebarNav}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => setActiveSection(item.id as ActiveSection)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {sidebarOpen && <span className={styles.navLabel}>{item.label}</span>}
            </button>
          ))}
        </nav>
        
        <div className={styles.sidebarFooter}>
          <button className={styles.previewButton} onClick={handlePreview}>
            <span className={styles.navIcon}>👁️</span>
            {sidebarOpen && <span>Preview Site</span>}
          </button>
          <button className={styles.logoutButton} onClick={handleLogout}>
            <span className={styles.navIcon}>🚪</span>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.contentHeader}>
          <h1 className={styles.sectionTitle}>
            {menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
          </h1>
          <div className={styles.headerActions}>
            <button className={styles.actionButton} onClick={handlePreview}>
              Preview Site
            </button>
          </div>
        </header>
        
        <div className={styles.contentBody}>
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;