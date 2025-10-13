import AppFeature from "../AppFeature";
import { homeFeatures } from "@constants/index";

export default function AppFeatureSection() {
  return (
    <section className="container grid grid-cols-3 my-20">
      {homeFeatures.map((feature) => (
        <AppFeature {...feature} key={feature.icon} />
      ))}
    </section>
  );
}
