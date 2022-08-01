import CurrentReading from "./CurrentReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

const MyReads = () => {
  return (
    <div className="list-books">
          <div className="list-books-content">
                <div>
                      <div className="list-books-title">
                            <h1>MyReads</h1>
                      </div>
                          <CurrentReading />
                          <WantToRead />
                          <Read />
                </div>
          </div>
    </div>
  )
}

export default MyReads