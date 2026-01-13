import Navbar from "../components/Navbar";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <main className="container mt-4">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <BookForm />
          </div>

          <div className="col-lg-8">
            <BookTable />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
