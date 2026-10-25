FROM coturn/coturn:4.17.2-r0
COPY remote/coturn/turnserver.conf /etc/coturn/lumenbot.conf
COPY remote/coturn/entrypoint.sh /usr/local/bin/lumenbot-coturn
ENTRYPOINT ["/usr/local/bin/lumenbot-coturn"]
