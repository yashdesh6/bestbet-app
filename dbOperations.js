import { useSQLiteContext } from "expo-sqlite";
import { useCallback } from 'react';

export const useDatabase = () => {
  const db = useSQLiteContext();

  const insertBet = useCallback(async (bet) => {
    await db.withTransactionAsync(async () => {
      await db.runAsync(
        `
        INSERT INTO Bets (
          parlay_id, 
          bet_number, 
          defense_data, 
          grade, 
          createdAt, 
          graph_key, 
          insights, 
          over_under_analysis, 
          player_data, 
          response, 
          user_prompt
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
        [
          bet.parlayId,
          bet.description,
          JSON.stringify(bet.defense_data),  // Convert object to JSON string
          bet.grade,
          bet.createdAt,  // Ensure this is in ISO 8601 format if it's a date string
          bet.graph_key,
          JSON.stringify(bet.insights),  // Convert array to JSON string
          bet.over_under_analysis,
          JSON.stringify(bet.player_data),  // Convert object to JSON string
          bet.response,
          bet.user_prompt
        ]
      );
    });

    // Optionally, you might want to refresh or fetch data again
    // await getData();
  }, [db]);

  const insertParlay = useCallback(async (parlay) => {
    await db.withTransactionAsync(async () => {
      await db.runAsync(
        `
        INSERT INTO Parlays (
          title, 
          grade, 
          description, 
          image, 
          createdAt
        ) 
        VALUES (?, ?, ?, ?, ?);
        `,
        [
          parlay.title,
          parlay.grade,
          parlay.description,
          parlay.image,
          parlay.createdAt  // Ensure this is in ISO 8601 format if it's a date string
        ]
      );
    });

    // Optionally, you might want to refresh or fetch data again
    // await getData();
  }, [db]);

  const getNextParlayId = useCallback(async () => {
    let nextParlayId = 1;  // Default to 1 if no rows exist

    await db.withTransactionAsync(async () => {
      const result = await db.execAsync(
        `
        SELECT MAX(id) as maxId FROM parlays;
        `
      );
      if (result) {
        nextParlayId = result + 1;
      }
    });

    return nextParlayId;
  }, [db]);

  return {
    insertBet,
    insertParlay,
    getNextParlayId
  };
};
