import React from "react";
import styles from "./page.module.css";

function Orders() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.headerRow}>
            <th className={`${styles.headerCell} ${styles.id}`}>Order ID</th>
            <th className={styles.headerCell}>Date</th>
            <th className={styles.headerCell}>Price</th>
            <th className={`${styles.headerCell} ${styles.products}`}>
              Products
            </th>
            <th className={styles.headerCell}>Status</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr className={styles.bodyRow}>
            <td className={`${styles.cell} ${styles.id}`}>31141414242</td>
            <td className={styles.cell}>19.17.2023</td>
            <td className={styles.cell}>19.80</td>
            <td className={`${styles.cell} ${styles.products}`}>
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (3){" "}
            </td>
            <td className={styles.cell}>On the way (Approx 30 min.)...</td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={`${styles.cell} ${styles.id}`}>31141414242</td>
            <td className={styles.cell}>19.17.2023</td>
            <td className={styles.cell}>19.80</td>
            <td className={`${styles.cell} ${styles.products}`}>
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (3){" "}
            </td>
            <td className={styles.cell}>On the way (Approx 30 min.)...</td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={`${styles.cell} ${styles.id}`}>31141414242</td>
            <td className={styles.cell}>19.17.2023</td>
            <td className={styles.cell}>19.80</td>
            <td className={`${styles.cell} ${styles.products}`}>
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (3){" "}
            </td>
            <td className={styles.cell}>On the way (Approx 30 min.)...</td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={`${styles.cell} ${styles.id}`}>31141414242</td>
            <td className={styles.cell}>19.17.2023</td>
            <td className={styles.cell}>19.80</td>
            <td className={`${styles.cell} ${styles.products}`}>
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (3){" "}
            </td>
            <td className={styles.cell}>On the way (Approx 30 min.)...</td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={`${styles.cell} ${styles.id}`}>31141414242</td>
            <td className={styles.cell}>19.17.2023</td>
            <td className={styles.cell}>19.80</td>
            <td className={`${styles.cell} ${styles.products}`}>
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (3){" "}
            </td>
            <td className={styles.cell}>On the way (Approx 30 min.)...</td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={`${styles.cell} ${styles.id}`}>31141414242</td>
            <td className={styles.cell}>19.17.2023</td>
            <td className={styles.cell}>19.80</td>
            <td className={`${styles.cell} ${styles.products}`}>
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (3){" "}
            </td>
            <td className={styles.cell}>On the way (Approx 30 min.)...</td>
          </tr>
          <tr className={styles.bodyRow}>
            <td className={`${styles.cell} ${styles.id}`}>31141414242</td>
            <td className={styles.cell}>19.17.2023</td>
            <td className={styles.cell}>19.80</td>
            <td className={`${styles.cell} ${styles.products}`}>
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (3){" "}
            </td>
            <td className={styles.cell}>On the way (Approx 30 min.)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
