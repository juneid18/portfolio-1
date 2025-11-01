"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import { client } from "@/utils/Client";
import imageUrlBuilder from "@sanity/image-url";
import Rounded from "../../common/RoundedButton";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).url();
}

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4); // how many projects to load initially
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const query = `*[_type == "project"] | order(publishedAt desc)[0...${visibleCount}]`;
        const data = await client.fetch(query);

        setProjects(data);

        // check if more projects exist
        const totalQuery = `count(*[_type == "project"])`;
        const total = await client.fetch(totalQuery);
        setHasMore(data.length < total);
      } catch (err) {
        console.error("Project fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, [visibleCount]); // re-run when visibleCount changes

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // load 4 more each click
  };

  if (loading) {
    return <p className={styles.loading}>Loading projects...</p>;
  }

  return (
    <main className={styles.project_main} id="projects">
      <h1 className={styles.project_big_text}>WOR</h1>
      <h1 className={styles.project_big_text_two}>K</h1>

      <div className={styles.container}>
        <div className={styles.project_title}>
          <p>Some Things I've Built</p>
          <div></div>
        </div>

        {projects.map((project) => (
          <div key={project._id} className={styles.project_con}>
            {/* Left: Project Image */}
            <div className={styles.project_left}>
              {project.poster?.asset && (
                <Image
                  src={urlFor(project.poster.asset._ref)}
                  alt={project.title}
                  className={styles.pr_image}
                  width={600}
                  height={400}
                />
              )}
            </div>

            {/* Right: Project Info */}
            <div className={styles.project_right}>
              <p className={styles.project_right_small_p_text}>
                Featured Project
              </p>
              <h2 className={styles.project_right_h2_text}>{project.title}</h2>
              <div className={styles.project_right_p_tech_used}>
                <p>{project.detail}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.web_link}
                  >
                    Visit Web
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Load More Button */}
        {hasMore && (
          <div className={styles.load_more_container}>
            <div onClick={handleLoadMore} style={{
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                gap: "10px",
                fontSize: "17px",
              }}>
              <Rounded>
                <p>Load More</p>
              </Rounded>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
