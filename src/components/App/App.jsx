import { useState, useEffect } from "react";
import Button1 from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../common/Modal/Modal";
import { getData, saveItem, editItem, deleteItem } from "../../services/Api";
import Posts from "../Posts/Posts";
import ModalChange from "../ModalChange/ModalChange";
import EditModal from "../EditModal/EditModal";
// import { Container, Row, Col, Form, Input, Button } from "react-bootstrap";

const END_POINT = "posts";

const App = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(null);
  const [onChangeForm, setOnChangeForm] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  // ------- Get -------//

  useEffect(() => {
    const getProducts = async () => {
      const posts = await getData(END_POINT);
      setPosts([...posts]);
    };
    getProducts();
  }, []);

  console.log(`posts`, posts);

  const openForm = () => {
    setIsOpenForm(true);
  };

  const onCloseForm = () => {
    setIsOpenForm(false);
    setOnChangeForm(false);
    setIsEditFormOpen(false);
  };

  // ----- Add products -----//

  const onNewProduct = (newProd) => {
    setPosts([...posts, newProd]);
  };

  // -------- Edit-----///

  const handleBtnChange = (prodId) => {
    setId(prodId);
    setOnChangeForm(true);
  };

  const onEdit = () => {
    setEditProduct(...posts.filter((post) => post.id === id));
    setOnChangeForm(false);
    setIsEditFormOpen(true);
  };

  const editProd = (newProd) => {
    if (
      editProduct.text === newProd.text &&
      editProduct.title === newProd.title
    )
      return;

    setActiveProduct({
      ...editProduct,
      text: newProd.text,
      title: newProd.title,
    });
  };

  useEffect(() => {
    if (!activeProduct) return;

    const onEditProducts = async () => {
      const newEditProduct = await editItem(END_POINT, activeProduct);

      posts.map((post) =>
        post.id === newEditProduct.id ? newEditProduct : post
      );
      setPosts(posts);
    };
    onEditProducts();
  }, [activeProduct]);

  // -------- Delete-----///

  const onDelete = async () => {
    console.log(`idDel`, id);
    const delProd = await deleteItem(END_POINT, id);
    posts.filter((post) => post.id !== id);

    setOnChangeForm(false);
    setId(null);
  };

  return (
    <div>
      <Button1 handleChange={openForm}> Add product</Button1>
      {posts.length && (
        <Posts posts={posts} handleBtnChange={handleBtnChange} />
      )}

      {isOpenForm && (
        <Modal onCloseForm={onCloseForm}>
          <Input onNewProduct={onNewProduct} onCloseForm={onCloseForm} />
        </Modal>
      )}
      {onChangeForm && (
        <Modal onCloseForm={onCloseForm}>
          <ModalChange onEdit={onEdit} onDelete={onDelete} />
        </Modal>
      )}
      {isEditFormOpen && (
        <Modal onCloseForm={onCloseForm}>
          <EditModal
            editProduct={editProduct}
            editProd={editProd}
            onCloseForm={onCloseForm}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
