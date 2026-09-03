import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, PhoneOff, MessageCircle, SearchX } from "lucide-react";
import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";
import Button from "../ui/Button.jsx";
import { getStores } from "../../api/client.js";
import { nigerianStates } from "../../data/nigerianStates.js";
import { cities } from "../../data/cities.js";
import { fadeInUp, staggerContainer, viewportOnce } from "../../styles/motion.js";
import styles from "./StoreLocator.module.css";

const SKELETON_COUNT = 6;

// Real records mix "address already contains city/state" with
// "city is a junk placeholder" (e.g. address:"Bayelsa", city:"Pending",
// state:"Bayelsa") — build the address line by only appending a part that
// isn't already present, so it never repeats or shows "Pending".
function formatStoreAddress(store) {
  const address = (store.address ?? "").trim();
  const city = (store.city ?? "").trim();
  const state = (store.state ?? "").trim();
  const isJunk = (value) => !value || /^pending$/i.test(value);
  const includes = (haystack, needle) => haystack.toLowerCase().includes(needle.toLowerCase());

  let line = address;
  if (city && !isJunk(city) && city !== state && !includes(line, city)) {
    line = line ? `${line}, ${city}` : city;
  }
  if (state && !includes(line, state)) {
    line = line ? `${line} · ${state}` : state;
  }
  return line;
}

function SkeletonCard() {
  return (
    <div className={styles.skeletonCard} aria-hidden="true">
      <div className={styles.skeletonHead} />
      <div className={styles.body}>
        <div className={`${styles.skeletonLine} ${styles.skeletonName}`} />
        <div className={`${styles.skeletonLine} ${styles.skeletonAddress}`} />
        <div className={`${styles.skeletonLine} ${styles.skeletonLabel}`} />
        <div className={styles.skeletonPhone} />
        <div className={styles.skeletonPhone} />
      </div>
    </div>
  );
}

export default function StoreLocator({ initialCity = "" }) {
  const initialState = initialCity
    ? cities.find((c) => c.city === initialCity)?.state ?? ""
    : "";
  const [state, setState] = useState(initialState);
  const [city, setCity] = useState(initialCity);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    getStores({ state, city, query }).then((data) => {
      setResults(data);
      setLoading(false);
    });
  }, [state, city, query]);

  const cityOptions = state ? cities.filter((c) => c.state === state) : cities;

  return (
    <div className={styles.locator}>
      <div className={styles.filters}>
        <Select
          id="loc-state"
          label="State"
          placeholder="Select a State"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setCity("");
          }}
        >
          {nigerianStates.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </Select>
        <Select
          id="loc-city"
          label="City"
          placeholder="Select a City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!state}
        >
          {cityOptions.map((c) => (
            <option key={c.city} value={c.city}>
              {c.city}
            </option>
          ))}
        </Select>
        <Input
          id="loc-query"
          label="Store Name"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {!state && (
        <div className={styles.empty}>
          <MapPin size={32} aria-hidden="true" />
          <h3>Find a Store Near You</h3>
          <p>Select a state to see Mona Partner Stores in your area.</p>
        </div>
      )}

      {state && loading && (
        <div className={styles.grid}>
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {state && !loading && results.length === 0 && (
        <div className={styles.empty}>
          <SearchX size={32} aria-hidden="true" />
          <h3>Mona Is Not Available in This City Yet</h3>
          <p>We're onboarding new Partner Stores regularly. Chat with us and we'll help you find the nearest option.</p>
          <Button href="https://wa.me/2347048100101" variant="whatsapp">
            <MessageCircle size={16} /> Chat With Mona
          </Button>
        </div>
      )}

      {state && !loading && results.length > 0 && (
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {results.map((store) => (
            <motion.div key={store.id} className={styles.card} variants={fadeInUp}>
              <div className={styles.cardHead}>
                <div className={styles.pin}>
                  <MapPin size={22} aria-hidden="true" />
                </div>
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{store.name}</h3>
                <p className={styles.address}>{formatStoreAddress(store)}</p>

                <p className={styles.phonesLabel}>Contact</p>
                {store.phone ? (
                  <a href={`tel:${store.phone}`} className={styles.phoneRow}>
                    <span className={styles.phoneIco}>
                      <Phone size={14} aria-hidden="true" />
                    </span>
                    <span className={styles.phoneNum}>{store.phone}</span>
                    <span className={styles.phoneCta}>Call</span>
                  </a>
                ) : (
                  <div className={styles.noNumber}>
                    <PhoneOff size={14} aria-hidden="true" /> No number listed
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
