import { Row } from "react-bootstrap";
import Footer from "../ui/footer/footer";
export default function ContestTodayLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <Row id="body" className="m-0">
           {children}
        </Row> 
        <Row className="m-0 p-0">
            <Footer/>
        </Row>
        </>
           
    );
  }