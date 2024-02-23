import { Container, Row } from "react-bootstrap"
import Footer from "../Footer"

function About() {

    let staff = [
        {
            "position": 2,
            "title": "Pastor",
            "name": "Richard Dunn",
            "description": "",
            "imageUrl": "https://i.postimg.cc/B61qDZpk/358538967-116370081515544-2905107769366832551-n.jpg"
        },
        {
            "position": 1,
            "title": "Youth Pastor",
            "name": "Daniel Billings",
            "description": `"Don't be an idiot." Changed my life -Dwight Schrute`,
            "imageUrl": "https://i.postimg.cc/26RTx2mG/daniel.jpg"
        }
    ]

    function mapStaff() {
        function ifPhoto(photo) {
            if (photo === "") {
                return <></>
            } else {
                return (
                    <>
                        <img src={photo}
                            alt="meadowood"
                            className="col-12 aboutPhoto" />
                    </>
                )
            }
        }

        function ifDesc(desc) {
            if (desc === "") {
                return <></>
            } else {
                return (
                    <div className="aboutDesc">
                        {desc}
                    </div>
                )
            }
        }

        staff = staff.sort((a, b) => a.position - b.position);

        return staff.map((member) => {
            return (
                <>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="aboutProfile">
                            {ifPhoto(member.imageUrl)}
                            <div className="aboutName">
                                {member.name}
                            </div>
                            <div className="aboutTitle">
                                {member.title}
                            </div>
                            {ifDesc(member.description)}
                        </div>
                    </div>
                </>
            )
        })
    }

    return (
        <>
            <Container>
                <Row>
                    <div
                        className="col-12 aboutPeopleHeading">
                        Declaration of Faith
                    </div>
                </Row>
                <Row>
                    The Church of God believes the whole Bible to be completely and equally inspired and that it is the written Word of God.  The Church of God has adopted the following Declaration of Faith as its standard and official expression of its doctrine.
                </Row>
                <Row>
                    <div
                        className="col-12 aboutPeopleHeading">
                        We Believe:
                    </div>
                </Row>
                <Row>
                    1. In the verbal inspiration of the Bible.<br />
                    2 .In one God eternally existing in three persons; namely, the Father, Son, and Holy Ghost.<br />
                    3. That Jesus Christ is the only begotten Son of the Father, conceived of the Holy Ghost, and born of the Virgin Mary.  That Jesus was crucified, buried, and raised from the dead.  That He ascended to heaven and is today at the right hand of the Father as the Intercessor.<br />
                    4. That all have sinned and come short of the glory of God and that repentance is commanded of God for all and necessary for forgiveness of sins.<br />
                    5. That justification, regeneration, and the new birth are wrought by faith in the blood of Jesus Christ.<br />
                    6. In sanctification subsequent to the new birth, through faith in the blood of Christ; through the Word, and by the Holy Ghost.<br />
                    7. Holiness to be God's standard of living for His people.<br />
                    8. In the baptism with the Holy Ghost subsequent to a clean heart.<br />
                    9. In speaking with other tongues as the Spirit gives utterance and that it is the initial evidence of the baptism of the Holy Ghost.<br />
                    10. In water baptism by immersion, and all who repent should be baptized in the name of the Father, and of the Son, and of the Holy Ghost.<br />
                    11. Divine healing is provided for all in the atonement.<br />
                    12. In the Lord's Supper and washing of the saints' feet.<br />
                    13. In the premillennial second coming of Jesus.  First, to resurrect the righteous dead and to catch away the living saints to Him in the air. Second, to reign on the earth a thousand years.<br />
                    14. In the bodily resurrection; eternal life for the righteous, and eternal punishment for the wicked.
                </Row>
                <Row>
                    <div
                        className="col-12 aboutPeopleHeading">
                        Staff
                    </div>
                </Row>
                <Row>
                    {staff ? (
                        mapStaff()
                    ) : (
                        <></>
                    )}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default About