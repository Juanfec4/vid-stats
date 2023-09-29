import { useState, useEffect } from "react";
import "./styles.scss";
import Button from "../button";
import sortIcon from "/public/icons/arrows-sort.svg";

const FrequencyTable = ({ occurrences }) => {
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortedWordEntries, setSortedWordEntries] = useState([]);

  useEffect(() => {
    const sortedEntries = Object.entries(occurrences).sort(([a], [b]) =>
      sortOrder === "desc" ? Number(b) - Number(a) : Number(a) - Number(b)
    );
    setSortedWordEntries(sortedEntries);
  }, [sortOrder]);

  const handleSort = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  return (
    <div className="Frequency-table">
      <Button
        handleClick={handleSort}
        text={`Sort ${sortOrder === "desc" ? "Ascending" : "Descending"}`}
        type={"primary"}
        icon={sortIcon}
      />
      <table className="Frequency-table__table">
        <thead>
          <tr>
            <th className="Frequency-table__header-cell">Appearances</th>
            <th className="Frequency-table__header-cell">Words</th>
          </tr>
        </thead>
        <tbody>
          {sortedWordEntries.map(([frequency, words]) => (
            <tr key={frequency} className="Frequency-table__row">
              <td className="Frequency-table__cell">{frequency}</td>
              <td className="Frequency-table__cell">
                {words.map((word) => (
                  <span key={word} className="Frequency-table__tag">
                    {word}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrequencyTable;
