import Book from "./Book";

const CurrentReading = () => {
  return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book image={"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"} 
                                title={"To Kill a Mockingbird"} 
                                author={"Harper Lee"}
                                widthnum={128}
                                heightnum={193}
                            />

                        <Book image={"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"} 
                                title={"Ender's Game"} 
                                author={"Orson Scott Card"}
                                widthnum={128}
                                heightnum={188}
                            />    
                    </ol>
            </div>
        </div>

  )
}

export default CurrentReading

 