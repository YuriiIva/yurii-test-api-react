import { useState, useEffect } from "react";
import Button1 from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../common/Modal/Modal";
import { getData, saveItem, editItem, deleteItem } from "../../services/Api";
import Posts from "../Posts/Posts";
// import { Container, Row, Col, Form, Input, Button } from "react-bootstrap";

const App = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const posts = await getData();
      setPosts([...posts]);
    };
    getProducts();
  }, []);

  return (
    <div>
      {posts.length && <Posts posts={posts} />}
      {/* <Button1 />

      {isOpenForm && (
        <Modal>
          <Input />
        </Modal>
      )} */}
    </div>
  );
};

export default App;
