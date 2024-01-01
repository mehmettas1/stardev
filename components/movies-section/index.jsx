import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

function MoviesSection({ popularMovies }) {
    return (
        <div className={styles.moviesSection}>
            <h3 className={styles.title}>POPÜLER FİLMS</h3>
            <div className={styles.movies}>
                {popularMovies.map((movie) => (
                    <div className={styles.movie} key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>
                            <Image
                                fill
                                unoptimized
                                alt={movie.title}
                                src={movie.i?.imageUrl}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

// export { MoviesSectionLoading } from "./loading";
export { MoviesSection };