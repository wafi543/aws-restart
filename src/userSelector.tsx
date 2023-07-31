import React, { FC, useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import styles from './userSelector.module.scss';
import TuwaiqIcon from './logos/tuwaiq.png';
import AWSLogo from './logos/aws-restart.png'
import { useEffect } from "react";
import axios from "axios";


interface User {
  id: number;
  name: string;
}

const UserSelector: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState<number>();
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [selectDisabled, setSelectDisabled] = useState<boolean>(false);

  useEffect(() => {
    beginFromStart();
  }, [])

  const getStudents = () => {
    const backendURL = "http://16.170.221.41:3001/students";
    axios.get(backendURL).then((res : any) => {
      setUsers(res.data);
    })
  }

  const selectRandomStudent = () => {
    // implement random selection
    setSelectDisabled(false);
    if (users.length === 0) {
      showNoOneElse();
      return;
    }
    const randomIndex = Math.floor(Math.random() * users.length);
    let user = users[randomIndex];
    setSelectedStudentIndex(randomIndex);
    setSelectedStudent(user.name);
    setModalVisible(true);
  }

  const deleteSelectedStudent = () => {
    var newLength = 0;
    setUsers(oldValues => {
      let newValues = oldValues.filter((_, i) => i !== selectedStudentIndex);
      newLength = newValues.length
      return newValues;
    })
    setModalVisible(false);
    if (newLength == 0) {
      showNoOneElse()
    }
  }

  const showNoOneElse = () => {
    setSelectDisabled(true);
    Modal.success({
      content: <b className={styles.successMessage}>'No one else! 😃'</b>
    })
  }

  const beginFromStart = () => {
    setSelectDisabled(false);
    setModalVisible(false);
    getStudents();
  }

  return <>
    <Row className={styles.logos}>
      <Col><img className={styles.awsLogo} src={AWSLogo}></img></Col>
      <Col><img className={styles.tuwaiqLogo} src={TuwaiqIcon}></img></Col>
    </Row>
    <h1 className={styles.title}>aws re/start طويق وأمازون للحوسبة السحابية</h1>
    <h2 className={styles.subTitle}>Student Random Selector</h2>
    <Row>
      <b className={styles.students}>Remaining Students: <b className={styles.studentsCount}>{users.length}</b></b>
    </Row>
    <Row style={{ marginBottom: '30px'}}>
      <Col><Button disabled={selectDisabled} type='primary' className={styles.selectButton} onClick={selectRandomStudent}>Select Student</Button></Col>
    </Row>
    <Row><Col><Button onClick={beginFromStart}>Start Again</Button></Col></Row>
    <Modal open={modalVisible}
      footer={<Button type="primary" onClick={deleteSelectedStudent}>OK</Button>}>
      <b className={styles.selectedStudent}>{selectedStudent}</b>
    </Modal>
  </>
}


export default UserSelector;