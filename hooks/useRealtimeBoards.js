'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/libs/firebase';

/**
 * Custom hook for real-time boards data
 * @returns {Object} - { boards, loading, error }
 */
export function useRealtimeBoards() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, 'boards'), 
      orderBy('updatedAt', 'desc')
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const boardsData = [];
        querySnapshot.forEach((doc) => {
          boardsData.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setBoards(boardsData);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error listening to boards:', err);
        setError('Failed to fetch real-time updates');
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { boards, loading, error };
}

export default useRealtimeBoards;
