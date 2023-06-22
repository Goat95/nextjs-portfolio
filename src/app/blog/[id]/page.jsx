import Image from "next/image";
import { notFound } from "next/navigation";

import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptatum possimus reiciendis praesentium soluta repellendus
            distinctio officia rerum odit, vel doloribus dolorum facere at
            beatae similique provident magnam, numquam corporis.
          </p>
          <div className={styles.author}>
            <Image
              src=""
              alt="Avatar"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Post Image"
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          itaque sunt nesciunt, aperiam dolor odit numquam distinctio cupiditate
          possimus, expedita ullam laudantium. Corrupti qui unde, alias
          architecto optio delectus fugiat.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          itaque sunt nesciunt, aperiam dolor odit numquam distinctio cupiditate
          possimus, expedita ullam laudantium. Corrupti qui unde, alias
          architecto optio delectus fugiat.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          itaque sunt nesciunt, aperiam dolor odit numquam distinctio cupiditate
          possimus, expedita ullam laudantium. Corrupti qui unde, alias
          architecto optio delectus fugiat. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Magnam itaque sunt nesciunt, aperiam
          dolor odit numquam distinctio cupiditate possimus, expedita ullam
          laudantium. Corrupti qui unde, alias architecto optio delectus fugiat.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
