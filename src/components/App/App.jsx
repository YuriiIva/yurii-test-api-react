import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button1 from "../Button/Button";
import Input from "../Input/Input";
import Modal from "../common/Modal/Modal";
import Posts from "../Posts/Posts";
import ModalChange from "../ModalChange/ModalChange";
import EditModal from "../EditModal/EditModal";
import { getProducts, deleteProducts } from "../../redux/Operations";

const App = () => {
  const posts = useSelector((state) => state.products.posts);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const [id, setId] = useState(null);
  const [onChangeForm, setOnChangeForm] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const dispatch = useDispatch();

  // ------- Get -------//

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const openForm = () => {
    setIsOpenForm(true);
  };

  const onCloseForm = () => {
    setIsOpenForm(false);
    setOnChangeForm(false);
    setIsEditFormOpen(false);
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

  // -------- Delete-----///

  const onDelete = async () => {
    dispatch(deleteProducts(id));
    setOnChangeForm(false);
    setId(null);
  };

  return (
    <div>
      <Button1 handleChange={openForm}> Add product</Button1>
      {!!posts.length && <Posts handleBtnChange={handleBtnChange} />}

      {isOpenForm && (
        <Modal onCloseForm={onCloseForm}>
          <Input onCloseForm={onCloseForm} />
        </Modal>
      )}
      {onChangeForm && (
        <Modal onCloseForm={onCloseForm}>
          <ModalChange onEdit={onEdit} onDelete={onDelete} />
        </Modal>
      )}
      {isEditFormOpen && (
        <Modal onCloseForm={onCloseForm}>
          <EditModal editProduct={editProduct} onCloseForm={onCloseForm} />
        </Modal>
      )}
    </div>
  );
};

export default App;
