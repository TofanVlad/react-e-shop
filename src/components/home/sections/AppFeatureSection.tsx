import AppFeature from "../AppFeature";
import { homeFeatures } from "@constants/index";

export default function AppFeatureSection() {
  return (
    <section className="container grid tablet:grid-cols-3 grid-cols-1 tablet:gap-y-0 gap-y-6 tablet:my-20 my-16">
      {homeFeatures.map((feature) => (
        <AppFeature {...feature} key={feature.icon} />
      ))}
    </section>
  );
}
