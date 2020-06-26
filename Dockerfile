FROM ruby:2.6.3-alpine

ENV APP_HOME /app

RUN apk add --update build-base libffi-dev \
  && mkdir $APP_HOME \
  && rm -rf /var/cache/apk/*

WORKDIR $APP_HOME

ADD Gemfile* $APP_HOME/
RUN bundle install

ADD . $APP_HOME

EXPOSE 8080

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "8080"]
