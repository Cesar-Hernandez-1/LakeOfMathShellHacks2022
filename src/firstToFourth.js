import Resource from "./injector";

const A = () => {
    return (
        <div className="a">
            <h1>Kindergarten Resources</h1>

            <div className="resource">
                <a href="https://www.mathsisfun.com/games/index.html">
                    <img src="https://yt3.ggpht.com/-BqC5n5vRuyE/AAAAAAAAAAI/AAAAAAAAAAA/XtAvsANDCuI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
                         width="150" height="150" />
                </a>

                <h3 className="Name">Math is Fun!</h3>
                <h5 className="Description">A fun site to see how fun math can be!</h5>
            </div>

            <div className="resource">
                <a href="https://www.khanacademy.org/math/cc-kindergarten-math">
                    <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/ae/a4/3c/aea43cf8-9c5f-ddb0-d488-1acafbbfcd5a/source/1000x1000bb.jpg"
                         width="150" height="150" />
                </a>

                <h3 className="Name">Khan Academy</h3>
                <h5 className="Description">Khan Academy clearly explains addition and subtraction!</h5>
            </div>

            <div className="resource">
                <a href="https://www.education.com/worksheets/kindergarten/math/">
                    <img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/3877e9613798787cfa6f1d62f6ed7ddc"
                         width="150" height="150" />
                </a>

                <h3 className="Name">Education.com</h3>
                <h5 className="Description">Fun and printable worksheets about math!</h5>
            </div>

            <div className="resource">
                <a href="https://www.k5learning.com/free-preschool-kindergarten-worksheets/simple-math">
                    <img src="https://c1.staticflickr.com/7/6061/6054038410_58b22aa3b6_n.jpg"
                         width="150" height="150" />
                </a>

                <h3 className="Name">K5 Learning</h3>
                <h5 className="Description">Printable worksheets to test your addition and subtraction skills!</h5>
            </div>

        </div>
    )
}

export default A;