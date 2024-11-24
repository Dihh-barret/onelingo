import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Aplica o middleware em todas as rotas, ignorando arquivos estáticos e internos do Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Garante que o middleware será sempre executado para APIs
    '/(api|trpc)(.*)',
  ],
};