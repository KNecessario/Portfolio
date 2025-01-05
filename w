public class ThreadMethodsExample {

    public static void main(String[] args) {
        ThreadMethodsExample example = new ThreadMethodsExample();
        example.execute();
    }

    public void execute() {
        // Create a new thread
        Thread myThread = new Thread(new MyRunnable());

        // 1. Start the thread
        myThread.start();

        // 2. Call run method directly (not recommended, used here just for demonstration)
        myThread.run();

        try {
            // 3. Sleep the main thread for 500ms
            Thread.sleep(500);

            // 4. Check if the myThread is still alive
            if (myThread.isAlive()) {
                System.out.println("Thread is still running...");
            }

            // 5. Wait for the myThread to finish
            myThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 6. Get the ID of the thread
        long threadId = myThread.getId();
        System.out.println("Thread ID: " + threadId);

        System.out.println("Main thread ends.");
    }

    class MyRunnable implements Runnable {
        @Override
        public void run() {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Count: " + i);
                try {
                    // Sleep for 1 second
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
