import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Categories = ({ popularMovies }) => {
    return (
        <div className={styles.categories}>
            {popularMovies?.map((category) => (
                <Link
                    key={category.id}
                    className={styles.category}
                    href={`/${category.id}`}
                >
                    <div className={styles.name}>{category.qid}</div>
                </Link>
            ))}
        </div>
    );
};

export default Categories;
