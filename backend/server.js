import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reservationsRouter from './routes/reservations.js';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

// ============================================================
// MIDDLEWARE
// ============================================================
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// ============================================================
// LOGGING
// ============================================================
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ============================================================
// ROUTES
// ============================================================
app.use('/api/reservations', reservationsRouter);

// ============================================================
// HEALTH CHECK
// ============================================================
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// ============================================================
// ERROR HANDLER
// ============================================================
app.use((err, req, res, next) => {
  console.error('❌ Erreur serveur:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Erreur serveur'
  });
});

// ============================================================
// DÉMARRER LE SERVEUR
// ============================================================
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║     🌿 NAYA HARMONIE - Serveur de Réservations              ║
║                                                               ║
║     ✅ Serveur lancé sur http://localhost:${PORT}            ║
║     📧 Email API: Resend configurée                          ║
║     💾 Base de données: Supabase configurée                  ║
║     🔔 Webhooks: En attente de Calendly                      ║
║                                                               ║
║     Press Ctrl+C to stop                                     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
  `);
});