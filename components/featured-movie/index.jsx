import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

function FeaturedMovie({ movie = {} }) {
    // const { poster_path, title, overview } = movie;

    return (
        <div className={styles.movieWrapper}>
            <h1 className={styles.movieTitle}>{movie.l}</h1>
            <p
                className={styles.overview}
                // className={`${styles.overview} ${isCompact ? styles.shortOverview : ""
                //     }`}
            >
                {movie.q}
            </p>
            <div className={styles.actionButtons}>
                <Link className={styles.playButton} href={`/movie/${movie.id}`}>
                    Play
                </Link>
                <button className={styles.addButton}>
                    <FaPlus />
                </button>
            </div>
            <div className={styles.moviePoster}>
                <div className={styles.moviePosterOverlay}></div>
                <Image
                    unoptimized
                    src={movie.i?.imageUrl}
                    alt="random"
                    fill
                />
            </div>
        </div>
    );
}

// export { FeatureMovieLoading } from "./loading";
export { FeaturedMovie };