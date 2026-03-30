import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import KV from '@site/static/img/distributed-key-value-storage.svg';
import Coordination from '@site/static/img/distributed-coordination.svg';
import Tooling from '@site/static/img/operational-tooling.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Distributed Cache for .NET',
    Svg: KV,
    description: (
      <>
        High-performance distributed caching with seamless in-process and cluster modes.
      </>
    ),
  },
  {
    title: 'Built-in Coordination Primitives',
    Svg: Coordination,
    description: (
      <>
        Leader election, distributed locks, counters, watchers, and transactions — built-in.
      </>
    ),
  },
  {
    title: 'Production-Ready Tooling',
    Svg: Tooling,
    description: (
      <>
        Manage clusters and automate operations using powerful CLI tooling and APIs.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>

		  <div className={styles.featureIcon}>
			<Svg className={styles.featureSvg} role="img" />
		  </div>

		  <Heading as="h3" className={styles.featureTitle}>
			{title}
		  </Heading>

		  <p className={styles.featureDesc}>
			{description}
		  </p>

		</div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}