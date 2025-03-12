import SideBar from './components/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <SideBar />
      </aside>

      {/* Konten utama */}
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
