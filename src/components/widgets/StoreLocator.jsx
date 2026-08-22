import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, MessageCircle, SearchX } from "lucide-react";
import Input from "../ui/Input.jsx";
import Select from "../ui/Select.jsx";
import Button from "../ui/Button.jsx";
import { getStores } from "../../api/client.js";
import { serviceLabels } from "../../data/stores.js";
import { nigerianStates } from "../../data/nigerianStates.js";
import { cities } from "../../data/cities.js";
import { fadeInUp, staggerContainer, viewportOnce } from "../../styles/motion.js";
import styles from "./StoreLocator.module.css";

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
            <option key={s} value={s}>
              {s}
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
              <div className={styles.image}>
                <MapPin size={28} aria-hidden="true" />
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{store.name}</h3>
                <p className={styles.address}>
                  {store.address}, {store.city}, {store.state}
                </p>
                <p className={styles.hours}>
                  <Clock size={14} aria-hidden="true" /> {store.hours}
                </p>
                <ul className={styles.services}>
                  {store.services.map((s) => (
                    <li key={s}>{serviceLabels[s]}</li>
                  ))}
                </ul>
                <div className={styles.actions}>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(store.address + ", " + store.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionLink}
                  >
                    <Navigation size={15} /> Get Directions
                  </a>
                  <a href={`tel:${store.phone}`} className={styles.actionLink}>
                    <Phone size={15} /> Call Store
                  </a>
                  <a
                    href={`https://wa.me/${store.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionLink}
                  >
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
