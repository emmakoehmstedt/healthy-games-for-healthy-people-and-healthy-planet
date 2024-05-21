import Layout from "../components/layouts/layout";
import styles from "./styles/information.module.css";

/*************************************************************************
 * Component: Information
 * Description: This component displays a page providing information
 * about the project / JOFN
 *************************************************************************/
const Information = () => {
  return (
    <Layout>
      <div className={styles.information}>
        {/* Add your information content here */}
        <div className={styles.purposeFrame}>
          <b className={styles.purposeTextConatiner}>
          <h1>Games for Healthy People and Healthy Planet</h1>

            <h3>Purpose</h3>
              <p>
                {`Our purpose is to improve children’s health and environmental health through climate-resilient food citizenship. By developing interactive tools and games to engage children and young adults,
                we can teach people about food systems and climate change. We
                want to provide technology to empower children with scientific-based resources to become aware of the connections between climate change and their daily activities.
                We want to increase children’s climate literacy by teaching them how food systems impact climate change. We want children to have positive experiences with all stages of their food including planning, shopping, cooking, and eating.
                We want to do this by applying JOFN’s findings and research to our work. This program has
                already found what works well for these children and young adults. We can take the principles
                and teachings that work best for each age group. Lastly, we’ll take this information to build our
                tools which will go back into the camp to bolster the curriculum and activities. Empowered with informed knowledge these children can make climate-based food choices. Ultimately, contributing to healthy people and a healthy planet.`}
              </p>
            </b>
          </div>
      </div>
    </Layout>
  );
};

export default Information;
